"use client";
import { Nav, NavDropdown } from "react-bootstrap";
import LanguageSwitcher from "@/components/Lang";
import { usePathname } from "next/navigation";

function TopNav(props: any) {
  const topMenu = props.navs.navs;
  const currentRoute = usePathname();
  return (
    <>
      <Nav className="topNav me-auto xl:flex-grow justify-between max-xl:w-full xl:mr-[50px] text-sm">
        {topMenu?.map((item: any) => {
          if (item.children.length > 0) {
            return (
              <NavDropdown
                title={item.title}
                id={item.title}
                className="topNavi text-resilience text-base max-xl:border-b-1 border-resilience"
                key={item.key}
              >
                {item?.children?.map((child: any) => (
                  <NavDropdown.Item
                    key={child.key}
                    href={child.uri}
                    className={
                      currentRoute === child.uri
                        ? `topNavi text-resilience justify-start active:bg-resilience font-bold`
                        : `topNavi text-resilience justify-start active:bg-resilience`
                    }
                  >
                    {child.title}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            );
          } else {
            return (
              <Nav.Link
                href={item.uri}
                className={
                  currentRoute === item.uri
                    ? `topNavi text-resilience font-bold`
                    : `topNavi text-resilience`
                }
                key={item.key}
              >
                {item.title}
              </Nav.Link>
            );
          }
        })}
      </Nav>
      <Nav className="gap-4">
        <Nav.Link
          target="_blank"
          href="https://airtable.com/appXxYQpHe58OMn4o/shr52vWnvJ4BslvQv"
          className="nesletterBtn text-clarity min-w-[180px] text-center hover:bg-growth"
        >
          Newsletter Sign-up
        </Nav.Link>
        <NavDropdown
          title="Language"
          id="language"
          className="border-1 language notranslate  border-solid border-resilience rounded-lg text-center font-normal text-resilience leading-[30px] text-base justify-start min-w-[140px] px-[15px] hover:bg-resilience hover:text-clarity focus:text-clarity"
        >
          <LanguageSwitcher />
        </NavDropdown>
      </Nav>
    </>
  );
}

export default TopNav;
