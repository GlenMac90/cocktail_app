# Cocktail Explorer

Cocktail Explorer is a mobile application that allows users to browse a list of cocktails fetched from TheCocktailDB API. Users can view detailed information about each cocktail by clicking on it, which navigates them to a dynamic route with the drink's details.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Contact Information](#contact-information)
- [Resources](#resources)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/GlenMac90/cocktail_app
   ```
1. **Navigate to the project directory:**
   ```bash
   cd cocktail-app
   ```
1. **Install dependencies:**
   ```bash
   npm install
   ```

## Usage

**Run the development server:**

```bash
npm run dev
```

## API Reference

This project uses [TheCocktailDB API](https://www.thecocktaildb.com/api.php) to fetch cocktail data. Below are the key endpoints used in the application:

<img src="public/the-cocktail-db-logo.png" alt="The_Cocktail_DB_Logo" width="600">

### Get a List of Cocktails

- **Endpoint:** `/filter.php`
- **Method:** `GET`
- **Description:** Retrieves a list of cocktails based on a search query.
- **URL:**
  ```plaintext
  https://www.thecocktaildb.com/api/json/v1/1/filter.php?c={searchTerm}
  ```

### Example response

```json
{
  "drinks": [
    {
      "strDrink": "Margarita",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
      "idDrink": "11007"
    },
    {
      "strDrink": "Blue Margarita",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg",
      "idDrink": "11118"
    }
  ]
}
```

### Get information on a cocktail

- **Endpoint:** `/lookup.php`
- **Method:** `GET`
- **Description:** Retrieves information on a cocktail based on an id.
- **URL:**
  ```plaintext
  https://www.thecocktaildb.com/api/json/v1/1/lookup.php?s={drinkId}
  ```

### Example response

```json
{
  "idDrink": "11007",
  "strDrink": "Margarita",
  "strDrinkAlternate": null,
  "strTags": "IBA,ContemporaryClassic",
  "strVideo": null,
  "strCategory": "Ordinary Drink",
  "strIBA": "Contemporary Classics",
  "strAlcoholic": "Alcoholic",
  "strGlass": "Cocktail glass",
  "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
  "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
  "strIngredient1": "Tequila",
  "strIngredient2": "Triple sec",
  "strIngredient3": "Lime juice",
  "strIngredient4": "Salt",
  "strMeasure1": "1 1/2 oz",
  "strMeasure2": "1/2 oz",
  "strMeasure3": "1 oz",
  "dateModified": "2015-08-18 14:42:59"
}
```

### Features

**Homepage Drink List** - Displays a comprehensive list of drinks, featuring images and names.

**Dynamic Drink Details** - Each drink has a detailed page for more information, including ingredients, measurements, and preparation instructions.

**Responsive Design** - Fully responsive, ensuring a seamless and enjoyable browsing experience on any device.

**Server-side Rendering** - This site leverages NextJS server side rendering for faster load times and greater user experience.

**Custom Animations** - Custom animations are featured throughout the application using Framer Motion.

### Technologies Used

![My Skills](https://skillicons.dev/icons?i=ts,react,next,tailwind,nodejs,github,vercel,figma)

## Contact Information:

[![linkedin](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/glenmccallum/)
[![instagram](https://skillicons.dev/icons?i=instagram)](https://www.instagram.com/glenmacdev/)
[![github](https://skillicons.dev/icons?i=github)](https://github.com/GlenMac90/)

#### Made by Glen McCallum

#### Email: **glen.mccallum@live.co.uk**

#### Tel: **+44 7984 365789**

## Resources:

- [Next.js](https://nextjs.org/docs) - Explore the powerful features and API of Next.js.
- [React](https://react.dev/) - Dive deeper into the world of React.,
- [Tailwind](https://v2.tailwindcss.com/docs/) - Master the utility-first approach with Tailwind CSS.
- [ShadCN](https://ui.shadcn.com/docs) - Discover the comprehensive UI components offered by ShadCN.
- [Framer Motion](https://www.framer.com/motion/) - Animate with ease using Framer Motion.
