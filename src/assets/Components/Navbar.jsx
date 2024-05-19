import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";
import NextInput from "./NextUI/NextInput";
import {
  IconMapPin,
  IconMoon,
  IconSearch,
  IconSun,
  IconXboxX,
} from "@tabler/icons-react";
import { useState } from "react";
// import { useGetSearchResultMutation } from "../../Services/API/SearchResult";
import NextSwitch from "./NextUI/NextSwitch";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState("");

  // const [getSearchResult] = useGetSearchResultMutation();

  const handleSearchChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    // const response = await getSearchResult(query);
  };

  return (
    <>
      <>
        <header className="navbar navbar-expand-md d-print-none">
          <div className="container-xl gap-3">
            <div className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
              <a href=".">
                <img
                  src="./static/logo-small.svg"
                  width="32"
                  height="32"
                  alt="Tabler"
                  className="navbar-brand-image me-3"
                />
              </a>
              <span className="text-white dark:text-black">
                {" "}
                Your Brand Name{" "}
              </span>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-menu"
              aria-controls="navbar-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="flex align-middle gap-x-2 dark:text-white">
              <IconMapPin className="my-auto" size={40} />
              <h6 className="flex flex-col">
                <small>Deliveres to</small>
                <span className="text-sm"> Ahmedabad </span>
              </h6>
            </div>

            <NextInput
              className=""
              size="xs"
              startContent={<IconSearch />}
              isLabelEnabled={false}
              endContent={<IconXboxX size="20" className="cursor-pointer" />}
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search Product | Category"
              name="search"
              type="text"
              isRequired
              // touched={touched}
              // errors={errors}
            />

            <div className="navbar-nav flex-row order-md-last">
              <div className="d-none d-md-flex">
                <a
                  href="?theme=dark"
                  className="nav-link px-0 hide-theme-dark"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  aria-label="Enable dark mode"
                  data-bs-original-title="Enable dark mode"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                  </svg>
                </a>
                <a
                  href="?theme=light"
                  className="nav-link px-0 hide-theme-light"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  aria-label="Enable light mode"
                  data-bs-original-title="Enable light mode"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                  </svg>
                </a>
                <div className="nav-item dropdown d-none d-md-flex me-3">
                  <a
                    href="#"
                    className="nav-link px-0"
                    data-bs-toggle="dropdown"
                    tabIndex="-1"
                    aria-label="Show notifications"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                      <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                    </svg>
                    <span className="badge bg-red"></span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Last updates</h3>
                      </div>
                      <div className="list-group list-group-flush list-group-hoverable">
                        <div className="list-group-item">
                          <div className="row align-items-center">
                            <div className="col-auto">
                              <span className="status-dot status-dot-animated bg-red d-block"></span>
                            </div>
                            <div className="col text-truncate">
                              <a href="#" className="text-body d-block">
                                Example 1
                              </a>
                              <div className="d-block text-secondary text-truncate mt-n1">
                                Change deprecated html tags to text decoration
                                classes (#29604)
                              </div>
                            </div>
                            <div className="col-auto">
                              <a href="#" className="list-group-item-actions">
                                {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon text-muted"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="list-group-item">
                          <div className="row align-items-center">
                            <div className="col-auto">
                              <span className="status-dot d-block"></span>
                            </div>
                            <div className="col text-truncate">
                              <a href="#" className="text-body d-block">
                                Example 2
                              </a>
                              <div className="d-block text-secondary text-truncate mt-n1">
                                justify-content:between ⇒
                                justify-content:space-between (#29734)
                              </div>
                            </div>
                            <div className="col-auto">
                              <a
                                href="#"
                                className="list-group-item-actions show"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon text-yellow"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="list-group-item">
                          <div className="row align-items-center">
                            <div className="col-auto">
                              <span className="status-dot d-block"></span>
                            </div>
                            <div className="col text-truncate">
                              <a href="#" className="text-body d-block">
                                Example 3
                              </a>
                              <div className="d-block text-secondary text-truncate mt-n1">
                                Update change-version.js (#29736)
                              </div>
                            </div>
                            <div className="col-auto">
                              <a href="#" className="list-group-item-actions">
                                {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon text-muted"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="list-group-item">
                          <div className="row align-items-center">
                            <div className="col-auto">
                              <span className="status-dot status-dot-animated bg-green d-block"></span>
                            </div>
                            <div className="col text-truncate">
                              <a href="#" className="text-body d-block">
                                Example 4
                              </a>
                              <div className="d-block text-secondary text-truncate mt-n1">
                                Regenerate package-lock.json (#29730)
                              </div>
                            </div>
                            <div className="col-auto">
                              <a href="#" className="list-group-item-actions">
                                {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon text-muted"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Dropdown placement="bottom-start">
                <DropdownTrigger>
                  <User
                    as="button"
                    avatarProps={{
                      isBordered: true,
                      src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                    }}
                    className="transition-transform"
                    description="@tonyreichert"
                    name={<span className="text-nowrap">Tony Reichert</span>}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-bold">Signed in as</p>
                    <p className="font-bold">@tonyreichert</p>
                  </DropdownItem>
                  <DropdownItem key="settings">My Settings</DropdownItem>
                  <DropdownItem key="team_settings">Team Settings</DropdownItem>
                  <DropdownItem key="analytics">Analytics</DropdownItem>
                  <DropdownItem key="system">System</DropdownItem>
                  <DropdownItem key="configurations">
                    Configurations
                  </DropdownItem>
                  <DropdownItem key="help_and_feedback">
                    Help & Feedback
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NextSwitch
                isSelected={isDarkMode}
                startContent={<IconSun />}
                endContent={<IconMoon />}
                size="sm"
                onChange={() => setIsDarkMode((isDarkMode) => !isDarkMode)}
                s
              />
            </div>
          </div>
        </header>
        <header className="navbar-expand-md">
          <div className="collapse visible navbar-collapse" id="navbar-menu">
            <div className="navbar">
              <div className="container-xl">
                <div className="row flex-fill align-items-center">
                  <div className="col">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <a className="nav-link" href="./#">
                          <span className="nav-link-icon d-md-none d-lg-inline-block">
                            {/* Download SVG icon from http://tabler-icons.io/i/star */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                            </svg>
                          </span>
                          <span className="nav-link-title">First</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="./#">
                          <span className="nav-link-icon d-md-none d-lg-inline-block">
                            {/* Download SVG icon from http://tabler-icons.io/i/star */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                            </svg>
                          </span>
                          <span className="nav-link-title">Second</span>
                          <span className="badge badge-sm bg-red">2</span>
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#navbar-third"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="outside"
                          role="button"
                          aria-expanded="false"
                        >
                          <span className="nav-link-icon d-md-none d-lg-inline-block">
                            {/* Download SVG icon from http://tabler-icons.io/i/star */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                            </svg>
                          </span>
                          <span className="nav-link-title">Third</span>
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="./#">
                            First
                          </a>
                          <a className="dropdown-item" href="./#">
                            Second
                          </a>
                          <a className="dropdown-item" href="./#">
                            Third
                          </a>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled" href="./#">
                          <span className="nav-link-icon d-md-none d-lg-inline-block">
                            {/* Download SVG icon from http://tabler-icons.io/i/star */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                            </svg>
                          </span>
                          <span className="nav-link-title">Disabled</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-2 d-none d-xxl-block">
                    <div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                      <form
                        action="./"
                        method="get"
                        autoComplete="off"
                        noValidate=""
                      >
                        <div className="input-icon">
                          <span className="input-icon-addon">
                            {/* Download SVG icon from http://tabler-icons.io/i/search */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                              <path d="M21 21l-6 -6"></path>
                            </svg>
                          </span>
                          <input
                            type="text"
                            value=""
                            className="form-control"
                            placeholder="Search…"
                            aria-label="Search in website"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    </>
  );
};

export default Navbar;
