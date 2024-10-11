import { useEffect, useState } from "react";
import { WalletLayout } from "./layout/WalletLayout";
import { HomeLayout } from "./layout/HomeLayout";

const layouts = ["home", "wallet"];
type Layout = (typeof layouts)[number];

function App() {
  const [layout, setLayout] = useState<Layout>("home");

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.slice(1);

      if (!layouts.includes(hash)) return;

      setLayout(hash as Layout);
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <>
      {layout === "home" && (
        <HomeLayout>
          <HomeLayout.SidebarStart>Spaces</HomeLayout.SidebarStart>
          <HomeLayout.Content>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            impedit voluptatibus, iure nemo odit dicta eaque incidunt. Eos
            commodi cum pariatur possimus deserunt aliquid ipsa, debitis ipsum
            natus quia officiis a quo ducimus, excepturi esse, eveniet saepe
            enim ullam! Ipsum accusamus eum, deleniti maxime sequi praesentium,
            nihil consequatur vero inventore ipsam commodi laboriosam esse hic
            eius vitae voluptates iste, harum dolorem non doloribus corporis?
            Delectus porro nisi maiores sunt placeat aperiam fuga dolore eveniet
            aut aliquam quas autem.
          </HomeLayout.Content>
          <HomeLayout.SidebarEnd>Articles</HomeLayout.SidebarEnd>
        </HomeLayout>
      )}
      {layout === "wallet" && (
        <WalletLayout>
          <WalletLayout.Nav>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
              <li>Link 4</li>
            </ul>
          </WalletLayout.Nav>
          <WalletLayout.Sidebar>CardInfo</WalletLayout.Sidebar>
          <WalletLayout.Content>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
            numquam cumque amet adipisci eligendi repellendus mollitia,
            consequatur maxime libero magnam magni delectus rem consequuntur
            aperiam dolor exercitationem alias obcaecati labore quam accusamus
            velit eaque praesentium iusto excepturi. Placeat voluptatum, odio id
            provident perspiciatis iste illum error velit assumenda quia
            numquam, blanditiis ex sit alias nam distinctio repellendus quae
            quis facere? Quas non sed voluptates suscipit aut ullam repellendus
            beatae error laboriosam blanditiis!
          </WalletLayout.Content>
        </WalletLayout>
      )}
    </>
  );
}

export default App;
