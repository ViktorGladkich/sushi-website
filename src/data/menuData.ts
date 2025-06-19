import { Category } from '../types';

export const menuData: Category[] = [
  {
    id: 'klassische-maki',
    name: 'Klassische Maki',
    products: [
      {
        id: 1,
        name: 'Sake Maki',
        description: 'Frischer Lachs',
        price: 4.50,
        image: '/images/sake-maki.jpg',
        tags: ['bestseller'],
        longDescription: 'Ein zeitloser Klassiker. Zarter, frischer Lachs, umhüllt von perfekt gewürztem Sushi-Reis und knusprigem Nori-Algenblatt. Einfach, rein und unvergesslich gut.',
        ingredients: ['Reis', 'Nori', 'Lachs'],
        allergens: ['Fisch'],
        nutrition: { calories: '180 kcal', protein: '10g', fat: '5g', carbs: '22g' }
      },
      {
        id: 2,
        name: 'Tekka Maki',
        description: 'Zarter Thunfisch',
        price: 5.00,
        image: '/images/tekka-maki.jpg',
        longDescription: 'Für Liebhaber von intensivem Geschmack. Hochwertiger, roher Thunfisch von tiefroter Farbe, der auf der Zunge zergeht, gerollt in Reis und Nori.',
        ingredients: ['Reis', 'Nori', 'Thunfisch'],
        allergens: ['Fisch'],
        nutrition: { calories: '190 kcal', protein: '12g', fat: '4g', carbs: '22g' }
      },
      {
        id: 3,
        name: 'Avocado Maki',
        description: 'Cremige Avocado',
        price: 3.80,
        image: '/images/avocado-maki.jpg',
        tags: ['vegetarisch'],
        longDescription: 'Die perfekte vegetarische Wahl. Samtige, reife Avocado sorgt für ein cremiges Mundgefühl und einen milden, nussigen Geschmack.',
        ingredients: ['Reis', 'Nori', 'Avocado', 'Sesam'],
        allergens: ['Sesam'],
        nutrition: { calories: '160 kcal', protein: '2g', fat: '8g', carbs: '23g' }
      },
      {
        id: 4,
        name: 'Kappa Maki',
        description: 'Frische Gurke',
        price: 3.50,
        image: '/images/kappa-maki.jpg',
        tags: ['vegetarisch'],
        longDescription: 'Ein erfrischender und knackiger Genuss. Saftige Gurkenstreifen, umhüllt von Reis und Nori, sorgen für einen leichten und belebenden Biss.',
        ingredients: ['Reis', 'Nori', 'Gurke', 'Sesam'],
        allergens: ['Sesam'],
        nutrition: { calories: '130 kcal', protein: '2g', fat: '1g', carbs: '25g' }
      }
    ]
  },
  {
    id: 'spezial-rollen',
    name: 'Spezial-Rollen',
    products: [
      {
        id: 5,
        name: 'Yume Drachenrolle',
        description: 'Gegrillter Aal, Avocado, Gurke, ummantelt mit Lachs',
        price: 14.50,
        image: '/images/dragon-roll.jpg',
        tags: ['bestseller'],
        longDescription: 'Unsere charakteristische Rolle, die die Wärme des gegrillten Aals mit der Cremigkeit von Avocado und der Frische von Gurke vereint. Ummantelt mit hauchdünn geschnittenem, flambiertem Lachs und verfeinert mit unserer geheimen Unagi-Sauce. Ein Meisterwerk der Texturen und Aromen.',
        ingredients: ['Reis', 'Nori', 'Gegrillter Aal', 'Avocado', 'Gurke', 'Lachs', 'Unagi-Sauce', 'Sesam'],
        allergens: ['Fisch', 'Soja', 'Sesam'],
        nutrition: { calories: '480 kcal', protein: '25g', fat: '22g', carbs: '45g' }
      },
      {
        id: 6,
        name: 'Rainbow Roll',
        description: 'Krabbenfleisch, Avocado, Gurke, mit verschiedenen Fischen belegt',
        price: 15.00,
        image: '/images/rainbow-roll.jpg',
        longDescription: 'Ein Fest für Augen und Gaumen. Eine California Roll als Basis, kunstvoll belegt mit einer bunten Vielfalt aus Lachs, Thunfisch und Avocado. Jeder Biss ist eine neue Entdeckung.',
        ingredients: ['Reis', 'Nori', 'Surimi', 'Avocado', 'Gurke', 'Lachs', 'Thunfisch', 'Mayonnaise'],
        allergens: ['Krebstiere', 'Fisch', 'Ei', 'Soja'],
        nutrition: { calories: '450 kcal', protein: '22g', fat: '20g', carbs: '44g' }
      },
      {
        id: 7,
        name: 'Spicy Tuna Roll',
        description: 'Gehackter Thunfisch, scharfe Sauce, Lauchzwiebeln',
        price: 13.80,
        image: '/images/spicy-tuna.jpg',
        tags: ['scharf', 'bestseller', 'neu'],
        longDescription: 'Für alle, die es feurig mögen. Fein gehackter Thunfisch, angemacht mit unserer hausgemachten scharfen Mayonnaise und frischen Lauchzwiebeln für eine pikante Note.',
        ingredients: ['Reis', 'Nori', 'Thunfisch', 'Scharfe Mayonnaise', 'Lauchzwiebeln', 'Chili'],
        allergens: ['Fisch', 'Ei', 'Soja'],
        nutrition: { calories: '420 kcal', protein: '20g', fat: '18g', carbs: '42g' }
      }
    ]
  },
  {
    id: 'nigiri',
    name: 'Nigiri',
    products: [
      {
        id: 8,
        name: 'Sake Nigiri',
        description: 'Frischer Lachs auf Reis',
        price: 3.20,
        image: '/images/sake-nigiri.jpg',
        tags: ['bestseller'],
        longDescription: 'Die pure Essenz des Sushi. Ein handgeformter Ballen aus perfekt temperiertem Reis, bedeckt mit einer saftigen, zarten Scheibe frischen Lachses. Ein Hauch Wasabi verbindet beide Komponenten.',
        ingredients: ['Reis', 'Lachs', 'Wasabi'],
        allergens: ['Fisch'],
        nutrition: { calories: '60 kcal', protein: '4g', fat: '2g', carbs: '7g' }
      },
      {
        id: 9,
        name: 'Maguro Nigiri',
        description: 'Zarter Thunfisch auf Reis',
        price: 3.80,
        image: '/images/maguro-nigiri.jpg',
        longDescription: 'Ein Klassiker von höchster Qualität. Eine Scheibe magerer, roter Thunfisch (Akami), der für seinen reinen und tiefen Geschmack bekannt ist, elegant auf einem Reisbett platziert.',
        ingredients: ['Reis', 'Thunfisch', 'Wasabi'],
        allergens: ['Fisch'],
        nutrition: { calories: '55 kcal', protein: '5g', fat: '1g', carbs: '7g' }
      },
      {
        id: 10,
        name: 'Ebi Nigiri',
        description: 'Gekochte Garnele auf Reis',
        price: 3.50,
        image: '/images/ebi-nigiri.jpg',
        longDescription: 'Leicht und süßlich im Geschmack. Eine perfekt gekochte und geformte Garnele, die das Reisbett umschließt und einen angenehm festen Biss bietet.',
        ingredients: ['Reis', 'Garnele'],
        allergens: ['Krebstiere'],
        nutrition: { calories: '50 kcal', protein: '4g', fat: '0.5g', carbs: '7g' }
      }
    ]
  }
];