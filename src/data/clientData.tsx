// src/data/clientData.ts

export interface ClientResult {
  id: string;
  name: string;
  lostOrGained: string;
  keyToSuccess: string;
  images: string[];
  testimonial?: string; // Optional testimonial
  duration?: string;    // Optional duration
  achievements?: string[]; // Optional additional achievements
}

export const clientData: ClientResult[] = [
  {
    id: "janet",
    name: "Client Janet",
    lostOrGained: "Lost 220 lbs in 2 years",
    keyToSuccess: "Rehabilitation of movements, small but clear gradual goals, and redefining nutrition.",
    duration: "2 years",
    images: ["./client0.png", "./client-0.png"],
    testimonial: "The journey wasn't just about weight loss, it was about discovering a new way of life. Every small victory added up to this amazing transformation.",
    achievements: [
      "Featured in Mercury News",
      "Completed first 5K run",
      "Improved all health markers significantly"
    ]
  },
  {
    id: "hue",
    name: "Client Hue",
    lostOrGained: "Lost 10 lbs in 4 weeks",
    keyToSuccess: "Consistent running routine and calorie restriction.",
    duration: "4 weeks",
    images: ["./client1.png", "./client-1.png"],
    testimonial: "The structured approach and constant support made all the difference in achieving my goals.",
    achievements: [
      "Improved running endurance by 200%",
      "Reduced body fat percentage by 5%",
      "Established consistent workout routine"
    ]
  },
  {
    id: "deborah",
    name: "Client Deborah",
    lostOrGained: "Lost 15 lbs and significantly reduced knee pain",
    keyToSuccess: "Range of motion training, cardio, and clear/definitive goal (climbing Mt. Kilimanjaro).",
    duration: "6 months",
    images: ["./client-2.png", "./client2.png"],
    testimonial: "Not only did I lose weight, but I gained the ability to move pain-free. Now I'm ready for my mountain climbing adventure!",
    achievements: [
      "Eliminated chronic knee pain",
      "Improved flexibility by 40%",
      "Prepared for Mt. Kilimanjaro climb"
    ]
  },
  {
    id: "client-j",
    name: "Client J",
    lostOrGained: "Lost 30 lbs in 8 months",
    keyToSuccess: "Resistance training and carb cycling.",
    duration: "8 months",
    images: ["./client3.png", "./client-3.png"],
    testimonial: "The personalized approach to nutrition and training helped me achieve results I never thought possible.",
    achievements: [
      "Increased muscle mass",
      "Reduced body fat percentage by 12%",
      "Improved overall strength significantly"
    ]
  },
  {
    id: "erik",
    name: "Client Erik",
    lostOrGained: "Lost 16 lbs and reduced body fat by 9%",
    keyToSuccess: "Heavy weight training, calorie and carb restriction.",
    duration: "4 months",
    images: ["./client4.png", "./client-4.png"],
    testimonial: "The combination of proper nutrition and progressive overload in training transformed my body composition completely.",
    achievements: [
      "Doubled strength in major lifts",
      "Achieved sub-15% body fat",
      "Maintained muscle mass during cut"
    ]
  },
  {
    id: "client-a",
    name: "Client A",
    lostOrGained: "Lost 4 lbs of body fat",
    keyToSuccess: "High intensity intervals.",
    duration: "6 weeks",
    images: ["./client5.png", "./client-5.png"],
    testimonial: "HIIT training was exactly what I needed to break through my plateau and see results quickly.",
    achievements: [
      "Improved cardiovascular endurance",
      "Reduced body fat while maintaining weight",
      "Increased energy levels throughout the day"
    ]
  }
];

// Optional: Add helper functions for filtering or sorting clients
export const getClientById = (id: string): ClientResult | undefined => {
  return clientData.find(client => client.id === id);
};

export const getClientsByDuration = (months: number): ClientResult[] => {
  return clientData.filter(client => {
    const duration = client.duration?.toLowerCase();
    if (duration?.includes('month')) {
      const clientMonths = parseInt(duration);
      return clientMonths <= months;
    }
    return false;
  });
};

export const getClientsWithWeightLoss = (minLbs: number): ClientResult[] => {
  return clientData.filter(client => {
    const weightLoss = parseInt(client.lostOrGained.match(/\d+/)?.[0] || '0');
    return weightLoss >= minLbs;
  });
};