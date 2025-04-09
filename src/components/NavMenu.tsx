
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const NavMenu = () => {
  const location = useLocation();
  
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                "flex items-center text-cream hover:text-gold transition-colors px-3 py-2",
                location.pathname === '/' ? "text-gold" : ""
              )}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "bg-transparent text-cream hover:text-gold data-[state=open]:text-gold",
              location.pathname === '/shop' ? "text-gold" : ""
            )}
          >
            Shop
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 p-4 bg-wood-dark border border-gold/20">
              <li className="row-span-3">
                <Link
                  to="/shop"
                  className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-wood-medium/50 to-wood-medium/30 p-6 no-underline outline-none focus:shadow-md"
                >
                  <div className="mb-2 mt-4 text-lg font-medium text-gold">
                    All Guitars
                  </div>
                  <p className="text-sm text-cream/70">
                    Browse our complete collection of premium guitars.
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=acoustic"
                  className="block select-none space-y-1 rounded-md p-3 text-cream hover:bg-gold/10 hover:text-gold"
                >
                  <div className="text-sm font-medium">Acoustic Guitars</div>
                  <p className="line-clamp-2 text-xs text-cream/70">
                    Handcrafted acoustic guitars with exceptional tonal qualities.
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=electric"
                  className="block select-none space-y-1 rounded-md p-3 text-cream hover:bg-gold/10 hover:text-gold"
                >
                  <div className="text-sm font-medium">Electric Guitars</div>
                  <p className="line-clamp-2 text-xs text-cream/70">
                    Premium electric guitars built for professional musicians.
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=classical"
                  className="block select-none space-y-1 rounded-md p-3 text-cream hover:bg-gold/10 hover:text-gold"
                >
                  <div className="text-sm font-medium">Classical Guitars</div>
                  <p className="line-clamp-2 text-xs text-cream/70">
                    Traditional nylon-string guitars with authentic tone.
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=bass"
                  className="block select-none space-y-1 rounded-md p-3 text-cream hover:bg-gold/10 hover:text-gold"
                >
                  <div className="text-sm font-medium">Bass Guitars</div>
                  <p className="line-clamp-2 text-xs text-cream/70">
                    Premium bass guitars with superior playability.
                  </p>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link to="/about" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                "flex items-center text-cream hover:text-gold transition-colors px-3 py-2",
                location.pathname === '/about' ? "text-gold" : ""
              )}
            >
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link to="/contact" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                "flex items-center text-cream hover:text-gold transition-colors px-3 py-2",
                location.pathname === '/contact' ? "text-gold" : ""
              )}
            >
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
