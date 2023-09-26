export const calculateSticker = (SelectedOption) => {

  let stickerPrice = 0;
  switch (SelectedOption) {
    case  "3x3":
      stickerPrice += 60 * 12;
      break ;
      case  "4x4":
      stickerPrice += 35 * 12;
      break ;
      case  "5x5":
      stickerPrice += 20 * 12;
      break ;
      case  "6x6":
      stickerPrice += 14 * 12;
      break ;
      case  "7x7":
      stickerPrice += 11 * 12;
      break ;
      case  "8x8":
      stickerPrice += 60 * 12;
      break ;
      case  "9x9":
      stickerPrice += 60 * 12;
      break ;
      case  "10x10":
      stickerPrice += 60 * 12;
      break ;
    default:
      break;
  }


  console.log(stickerPrice)
  return stickerPrice;
};
