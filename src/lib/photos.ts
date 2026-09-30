// Unsplash photos (Unsplash License — free for commercial use).
const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const photos = {
  apps: [
    unsplash("1744640326166-433469d102f2"), // glowing AI chip on a circuit board
    unsplash("1695668548342-c0c1ad479aee"), // server racks in a data hall
    unsplash("1497435334941-8c899ee9e8e9"), // aerial view of a solar farm
    unsplash("1722080767360-f0640ae8ce2f"), // false-colour satellite image of a city and waterways
    unsplash("1724597500306-a4cbb7d1324e"), // aerial view of a container ship at sea
    unsplash("1454789476662-53eb23ba5907"), // typhoon seen from space
  ],
  features: [
    unsplash("1614314007212-0257d6e2f7d8"), // ISS solar arrays in sunlight
    unsplash("1769251968740-f8ffa70f9043"), // Earth's limb against deep space
    unsplash("1460186136353-977e9d6085a1"), // satellite above a coastline
    unsplash("1708738793054-32b71e3fc822"), // two satellites orbiting above Earth
  ],
  why: unsplash("1517976487492-5750f3195933"), // rocket launch
};
