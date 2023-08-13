
export default function ageColorHandler(age) {
    switch (age) {
      case 12:
        return "bg-yellow-400";
      case 15:
        return "bg-orange-400";
      case 18:
        return "bg-red-400";
      default:
        return "bg-white";
    }
  };