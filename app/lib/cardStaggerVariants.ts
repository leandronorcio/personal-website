export const cardsContainerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const cardVariant = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
};
