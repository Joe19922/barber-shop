import { Grid, GridItem } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Shop, NavBar, NotFound } from "./components/modules";

function App() {
  // const navItems = ["Angebot", "Galerie", "Shop", "Kontakte"];
  const navItems = [
    { label: "Galerie", route: "/galerie" },
    { label: "Preise", route: "/angebot" },
    { label: "Logo", route: "/" },
    { label: "Shop", route: "/shop" },
    { label: "Kontakte", route: "/kontakte" },
  ];
  return (
    <>
      <BrowserRouter>
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "main main"`,
          }}
        >
          <GridItem area="nav">
            <NavBar items={navItems} />
          </GridItem>

          <GridItem area="main">
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/Shop" element={<Shop />} />
            </Routes>
          </GridItem>
        </Grid>
      </BrowserRouter>
    </>
  );
}

export default App;
