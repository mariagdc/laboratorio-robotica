export const weeklySchedule = [
  {
    day: "Lunes",
    location: "Centro Comunitario Norte",
    address: "Av. Principal 123, Localidad A",
    time: "16:00 - 18:00",
    ageGroup: "4-8 años",
    coordinates: { lat: -34.6037, lng: -58.3816 }
  },
  {
    day: "Martes", 
    location: "Plaza de los Niños",
    address: "Calle Secundaria 456, Localidad B",
    time: "17:00 - 19:00",
    ageGroup: "9-12 años",
    coordinates: { lat: -34.6118, lng: -58.4173 }
  },
  {
    day: "Miércoles",
    location: "Colegio San Martín",
    address: "Ruta 789, Localidad C", 
    time: "16:30 - 18:30",
    ageGroup: "4-8 años",
    coordinates: { lat: -34.5950, lng: -58.4010 }
  },
  {
    day: "Jueves",
    location: "Biblioteca Municipal",
    address: "Plaza Central 321, Localidad D",
    time: "17:30 - 19:30",
    ageGroup: "9-12 años",
    coordinates: { lat: -34.6085, lng: -58.3732 }
  },
  {
    day: "Viernes",
    location: "Polideportivo Este",
    address: "Camino Viejo 654, Localidad E",
    time: "16:00 - 18:00",
    ageGroup: "Todos (4-12 años)",
    coordinates: { lat: -34.6150, lng: -58.3920 }
  },
  {
    day: "Sábado",
    location: "Centro Cultural Oeste",
    address: "Boulevard 987, Localidad F",
    time: "10:00 - 12:00",
    ageGroup: "Taller Familiar",
    coordinates: { lat: -34.5990, lng: -58.4250 }
  }
];

export function getTodaySchedule() {
  const today = new Date().getDay();
  // Domingo = 0, Lunes = 1, ..., Sábado = 6
  const adjustedDay = today === 0 ? 6 : today - 1;
  return weeklySchedule[adjustedDay];
}

export function getWeekSchedule() {
  return weeklySchedule;
}