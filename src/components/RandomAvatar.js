import React, { useState } from "react";
import Avatar from "avataaars";
const randomArrayPicker = array => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return array[getRandomInt(0, array.length - 1)];
};
function RandomAvatar(props) {
  const { size = 100 } = props;
  const topTypes = [
    "ShortHairDreads01",
    "ShortHairShaggyMullet",
    "ShortHairShortCurly",
    "ShortHairShortFlat",
    "ShortHairShortRound",
    "ShortHairShortWaved",
    "ShortHairTheCaesar"
  ];
  const accessoriesTypes = [
    "Kurt",
    "Prescription02",
    "Prescription01",
    "Round",
    "Sunglasses",
    "Wayfarers"
  ];
  const hairColors = [
    "Auburn",
    "Black",
    "Blonde",
    "BlondeGolden",
    "Brown",
    "BrownDark",
    "PastePink",
    "Platinum",
    "Red",
    "SilverGray"
  ];
  const facialHairs = [
    "Blank",
    "BeardMedium",
    "BeardLight",
    "BeardMagestic",
    "MoustacheFancy",
    "MoustacheMagnum"
  ];
  const facialHairColors = [
    "Auburn",
    "Black",
    "Blonde",
    "BlondeGolden",
    "Brown",
    "BrownDark",
    "Platinum",
    "Red"
  ];
  const clothes = [
    "BlazerShirt",
    "BlazerSweater",
    "CollarSweater",
    "Hoodie",
    "ShirtCrewNeck"
  ];
  const colorFabrics = [
    "Black",
    "Blue01",
    "Blue02",
    "Blue03",
    "Gray01",
    "Gray02",
    "Heather",
    "PastelBlue",
    "PastelGreen",
    "PastelOrange",
    "PastelRed",
    "PastelYellow",
    "Red",
    "White"
  ];
  const eyes = ["Default", "Happy", "Side", "Squint", "Surprised"];
  const eyeBrows = [
    "Default",
    "DefaultNatural",
    "FlatNatural",
    "RaisedExcited",
    "RaisedExcitedNatural",
    "UpDown",
    "UpDownNatural"
  ];
  const mouths = ["Default", "Smile", "Twinkle"];
  const skins = [
    "Tanned",
    "Yellow",
    "Pale",
    "Light",
    "Brown",
    "DarkBrown",
    "Black"
  ];
  const [change, setChange] = useState(Math.random());
  return (
    <span onClick={() => setChange(Math.random())}>
      <Avatar
        style={{ width: size + "px", height: size + "px" }}
        avatarStyle="Circle"
        topType={randomArrayPicker(topTypes)}
        accessoriesType={randomArrayPicker(accessoriesTypes)}
        hairColor={randomArrayPicker(hairColors)}
        facialHairType={randomArrayPicker(facialHairs)}
        facialHairColor={randomArrayPicker(facialHairColors)}
        clotheType={randomArrayPicker(clothes)}
        clotheColor={randomArrayPicker(colorFabrics)}
        eyeType={randomArrayPicker(eyes)}
        eyebrowType={randomArrayPicker(eyeBrows)}
        mouthType={randomArrayPicker(mouths)}
        skinColor={randomArrayPicker(skins)}
      />
    </span>
  );
}

export default RandomAvatar;