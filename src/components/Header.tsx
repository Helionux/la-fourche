"use client"

import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { Input } from "./ui/input";
import { Heart, Menu, Search, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";


const Header = () => {
    const navigationItems = [
        {
            title: "Épicerie",
            items: [
                "Conserves & bocaux",
                "Pâtes, riz & céréales",
                "Huiles & vinaigres",
                "Condiments & sauces"
            ]
        },
        {
            title: "Frais",
            items: [
                "Produits laitiers",
                "Oeufs & fromages",
                "Charcuterie",
                "Plats préparés"
            ]
        },
        {
            title: "Surgelés",
            items: [
                "Légumes surgelés",
                "Fruits surgelés",
                "Plats cuisinés",
                "Glaces & desserts"
            ]
        },
        {
            title: "Boissons",
            items: [
                "Eaux & sodas",
                "Jus de fruits",
                "Thés & infusions",
                "Vins & alcools"
            ]
        },
        {
            title: "Hygiène & Beauté",
            items: [
                "Soins visage",
                "Hygiène dentaire",
                "Produits bébé"
            ]
        },
        {
            title: "Entretien",
            items: [
                "Lessive & adoucissant",
                "Nettoyants mutil-usage",
                "Vaisselle",
                "Prodduits WC"
            ]
        }
    ]
    return (
        <header className="border-b bg-white sticky top-0 z-50">
            <div className="bg-green-50 text-center py-2 text-sm">
                <span className="text-gray-700">
                    Livraison gratuite dès 69€ d `&apos` achats -
                </span>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="bg-gree-600 text-white px-3 py-2 rounded-md font-bold text-xl">
                            Hh
                        </div>
                        <span className="font-bold text-xl text-gray-800">La Fourche</span>
                    </Link>

                    {/* Desktop Navigation */}

                    <NavigationMenu>
                        <NavigationMenuList>
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuTrigger className="text-gray-700 hover:text-green-600">
                                        {item.title}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[300px] gap-3 p-4">
                                            {item.items.map((subItem) => (
                                                <li key={subItem}>
                                                    <NavigationMenuLink asChild>
                                                        <Link href={`/category/${subItem.toLowerCase().replace(/\s+/g, '-')}`} className="block select-noe space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-600">
                                                            {subItem}
                                                        </Link>
                                                    </NavigationMenuLink>

                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>




                    
                    {/* Bar de Recherche */}

                    <div className="flex-1 max-w-md mx-4 hidden md:block">
                        <div className="relative">
                            {/* <Input type="search" placeholder="Rechercher un produit..." className="pl-10 pr-4 w-full border-gray-300 focus:border-500 focus:ring-green-500" /> */}
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        </div>
                    </div>

                    {/* SideBar */}

                    <div className="flex items-center space-x-4">

                        {/* Button de Menu Mobile */}

                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="lg:hidden">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-80">
                                <div className="py-4">
                                    <h2 className="font-semibold text-lg mb-4">Menu</h2>
                                    {navigationItems.map((item) => (
                                        <div key={item.title} className="mb-4">
                                            <h3 className="font-medium text-gray-800 mb-2">{item.title}</h3>
                                            <ul className="space-y-1 ml-4">
                                                {item.items.map((subItem) => (
                                                    <li key={subItem}>
                                                        <Link href={`/category/${subItem.toLocaleLowerCase().replace(/\s+/g, '-')}`}>
                                                            {subItem}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>

                        {/* Bar de Recherche Mobile */}

                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Search className="h-5 w-5" />
                        </Button>

                        <Button variant="ghost" size="icon" className="hidden sm:flex">
                                <Heart className="h-5 w-5" />
                        </Button>

                        <Button variant="ghost" size="icon">
                            <User className="h-5 w-5" />
                        </Button>
                    </div>

                </div>

            </div>
            
        </header>
    );
}

export default Header;
