import { PrismaClient } from "@prisma/client";
import metallicaJSON from "../metallica.json";
import { stringToDate } from "../src/utils/dateFunctions";

const prisma = new PrismaClient();

const consoleEachItem = false; // log após cada inserção
const consoleEachTable = true; // log após a inserção completa em cada tabela

const metallicaData = metallicaJSON;
// console.log(metallicaData);

async function populateMembers() {
  const results = await Promise.all(
    metallicaData.members.map(async (member) => {
      const result = await prisma.bandMember.create({
        data: {
          id: member.id,
          name: member.name,
          artisticName: member.artisticName,
          birthDate: stringToDate(member.birthDate),
          ...(member.deathDate && {
            deathDate: stringToDate(member.deathDate),
          }),
          memberSince: stringToDate(member.memberSince),
          ...(member.bandDepartureDate && {
            bandDepartureDate: stringToDate(member.bandDepartureDate),
          }),
          instagram: member.instagram,
        },
      });
      consoleEachItem &&
        console.log(
          `Populado o membro ${member.artisticName} com o id ${member.id}`
        );
      return result;
    })
  );

  return results;
}

async function populateAlbums() {
  const results = await Promise.all(
    metallicaData.albuns.map(async (album) => {
      const result = await prisma.album.create({
        data: {
          id: album.id,
          title: album.title,
          albumCover: album.albumCover,
          spotifyURL: album.spotifyURL,
          releaseDate: stringToDate(album.releaseDate),
        },
      });
      consoleEachItem &&
        console.log(`Populado o álbum ${album.title} com o id ${album.id}`);
      return result;
    })
  );

  return results;
}

async function populateSongs() {
  const results = await Promise.all(
    metallicaData.albuns.flatMap((album) =>
      album.tracks.map(async (track) => {
        const result = await prisma.song.create({
          data: {
            id: track.id,
            albumId: album.id,
            discTrack: track.discTrack,
            title: track.title,
            duration: track.duration,
            lyrics: track.lyrics,
            spotifyURL: track.spotifyURL,
            officialMusicVideo: track.officialMusicVideo,
          },
        });
        consoleEachItem &&
          console.log(`Populada a música ${track.title} com o id ${track.id}`);
        return result;
      })
    )
  );

  return results;
}

async function populateAlbumMembers() {
  const results = await Promise.all(
    metallicaData.albuns.flatMap((album) =>
      album.composers.map(async (composerId) => {
        const result = await prisma.albumMember.create({
          data: {
            bandMemberId: composerId,
            albumId: album.id,
          },
        });
        consoleEachItem &&
          console.log(
            `Adicionado compositor ${composerId} ao álbum ${album.id}`
          );
        return result;
      })
    )
  );

  return results;
}

async function populateSongMembers() {
  const results = await Promise.all(
    metallicaData.albuns.flatMap((album) =>
      album.tracks.flatMap((track) =>
        track.composers.map(async (composerId) => {
          const result = await prisma.songMember.create({
            data: {
              bandMemberId: composerId,
              songId: track.id,
            },
          });
          consoleEachItem &&
            console.log(
              `Adicionado compositor ${composerId} à música ${track.id}`
            );
          return result;
        })
      )
    )
  );

  return results;
}

async function run() {
  await populateMembers();
  consoleEachTable && console.log("Populada tabela de Membros");
  await populateAlbums();
  consoleEachTable && console.log("Populada tabela de Albuns");
  await populateSongs();
  consoleEachTable && console.log("Populada tabela de Musicas");
  await populateAlbumMembers();
  consoleEachTable && console.log("Populada tabela de Compositores de Albuns");
  await populateSongMembers();
  consoleEachTable && console.log("Populada tabela de Compositores de Musicas");
}

run()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
