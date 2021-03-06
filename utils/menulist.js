export const menuItems = [
  {
    name: "UI Components",
    slug: "ui",
    path: "/",
    icon: `<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>`,
    children: [
      {
        name: "Cards",
        slug: "cards",
        path: "/components/cards",
        thumbnail: "/img/components/cards_metrics-icon.png",
        count: "4",
      },
      {
        name: "Data",
        slug: "data",
        path: "/components/data",
        thumbnail: "/img/components/data_table.png",
        count: "1",
      },
      {
        name: "Forms",
        slug: "forms",
        path: "/components/forms",
        thumbnail: "/img/components/forms_signin.png",
        count: "2",
      },
      {
        name: "Navigation",
        slug: "navigation",
        path: "/components/navigation",
        thumbnail: "/img/components/navigation_hamburger-animated.png",
        count: "1",
      },
    ],
  },
  {
    name: "Web Components",
    path: "/components/all",
    slug: "web",
    icon: `<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>`,
    children: [
      {
        name: "Header",
        slug: "header",
        path: "/components",
      },
      {
        name: "Features",
        slug: "features",
        path: "/components",
      },
      {
        name: "Contact",
        slug: "contact",
        path: "/components",
      },
      {
        name: "Footer",
        slug: "footer",
        path: "/components",
      },
    ],
  },
];
export default {
  menuItems,
};
