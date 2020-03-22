import React, { useState, useEffect } from "react";
import { ReactComponent as Info } from "./images/information.svg";
import { ReactComponent as Mail } from "./images/envelope.svg";
import { ReactComponent as Dots } from "./images//ellipsis.svg";
import Person from "../../assets/person_girl.jpg";
import MapChart from "../Graphs/GeoChart.jsx";
import { Link } from "react-router-dom";
import HeaderPage from "../HeaderPage/HeaderPage";
import styled from "styled-components";
import ChartTours from "../Graphs/GraphTours.jsx";
import CardTours from "../CardTours/CardTours.jsx";

const UserInteraction = (
	{
		items = [
			{
				name: "Hour",
				key: 0,
				scrollChor: "#"
			},
			{
				name: "Day",
				key: 1,

				scrollChor: "#"
			},
			{
				name: "Week",
				key: 2,
				scrollChor: "#about"
			},
			{
				name: "Month",
				key: 3,
				scrollChor: "#contact"
			}
		],
		itemsTours = [
			{ name: "Tours", key: 0, scrollChor: "#" },
			{ name: "Products", key: 1, scrollChor: "#" }
		]
	},
	props
) => {
	const [data_regions, setDataRegions] = useState([]);
	const [data_active_users, setActiveUsers] = useState([]);
	const [activeLinkTours, setActiveLinkTours] = useState("Tours");
	const [activeLink, setActiveLink] = useState("Month");

	useEffect(() => {
		setDataRegions([
			{
				place: "Algiers, Algeria",
				progress: 90
			},
			{
				place: "Mekkah, Saudi Arabia",
				progress: 65
			},
			{
				place: "Milan, Italie",
				progress: 40
			}
		]);
		setActiveUsers([
			{
				name: "kevin meklien",
				type: "influencer",
				picture: Person
			},
			{
				name: "kevin meklien",
				type: "influencer",
				picture: Person
			},
			{
				name: "kevin meklien",
				type: "influencer",
				picture: Person
			},
			{
				name: "kevin meklien",
				type: "influencer",
				picture: Person
			},
			{
				name: "kevin meklien",
				type: "influencer",
				picture: Person
			},
			{
				name: "kevin meklien",
				type: "influencer",
				picture: Person
			},
			{
				name: "kevin meklien",
				type: "influencer",
				picture: Person
			},
			{
				name: "kevin meklien",
				type: "influencer",
				picture: Person
			}
		]);
		var progress = document.getElementsByClassName("agency_span");
		for (let i = 0; i < Object.values(progress).length; i++) {
			Object.values(progress)[i].style.width = `${data_regions[i].progress}%`;
		}
	}, []);
	const setActive = link => {
		//request funtion to filter
		setActiveLink(link);
	};
	const handleSetActiveTours = link => {
		//request funtion to filter
		setActiveLinkTours(link);
	};

	return (
		<Container>
			<div className="z-10 flex flex-col  ">
				<HeaderPage
					title="Analytics and Statistics"
					buttons={[
						{
							title: "Tours booking & Products",
							active: false,
							href: "/admin/tours"
						},
						{
							title: "Users interactions",
							active: true,
							href: "/admin/users"
						}
					]}
				/>
				<div className="flex agency_row_users">
					<div className="w-3/5 agency_col_users">
						<div className="flex mb-4">
							<div className="px-4 w-full">
								<div className="mb-3 card bg-white">
									<div className="flex items-center h-16 border-none py-2  px-6">
										<div className="flex items-center whitespace-no-wrap text-21">
											Top tours
										</div>
										<div className="ml-auto whitespace-no-wrap flex justify-center items-center">
											<div className="mx-4 flex justify-center items-center">
												{items.map(elem => {
													let isActive = activeLink === elem.name;
													let navClass = isActive
														? "agency_choice_time_btn active border-none cursor-pointer "
														: "agency_choice_time_btn border-none cursor-pointer ";
													return (
														<Link
															to="#"
															name={elem["name"]}
															className={navClass}
															scrollchor={elem["scrollchor"]}
															key={elem["key"]}
															onClick={props =>
																setActive(
																	props.currentTarget.attributes[0].nodeValue
																)
															}
														>
															{elem["name"]}
														</Link>
													);
												})}
											</div>
											<div className="btn-group dropdown flex justify-center items-center">
												<span
													className="hint--bottom text-center  hint--medium"
													aria-label="this is a hint"
												>
													<button className="btn-icon btn-icon-only btn btn-link">
														<Info fill="#b3b8bd" className="w-4 h-4" />
													</button>
												</span>
												{/* here the dropdown div... */}
											</div>
										</div>
									</div>
									<div className="flex justify-start border-none mx-8">
										{itemsTours.map(elem => {
											let isActive = activeLinkTours === elem.name;
											let navClass = isActive
												? "agency_choice_time_btn active border-none cursor-pointer"
												: "agency_choice_time_btn border-none cursor-pointer";
											return (
												<p
													name={elem["name"]}
													className={navClass}
													scrollChor={elem["scrollChor"]}
													key={elem["key"]}
													onClick={props =>
														handleSetActiveTours(
															props.currentTarget.attributes[0].nodeValue
														)
													}
												>
													{elem["name"]}
												</p>
											);
										})}
									</div>
									<div className="flex justify-center items-center">
										<ChartTours />
									</div>
								</div>
							</div>
						</div>
						<div className="flex justify-start items-start mb-4">
							{/* Top Liked tour begin */}
							<div className="px-4 w-3/4 agency_col_tours scroll-div">
								<div className="mb-3 card">
									<div className="flex items-start h-16 border-none py-2  px-6 bg-white">
										<div className="flex items-center whitespace-no-wrap text-21">
											Top Liked tours
										</div>
										<div className="flex justify-center items-center ml-auto whitespace-no-wrap">
											<div className="flex justify-center items-center">
												<span
													className="hint--left text-center  hint--medium"
													aria-label="this is a hint"
												>
													<button className="">
														<Info fill="#b3b8bd" className="w-4 h-4" />
													</button>
												</span>
												{/* here the dropdown div... */}
											</div>
										</div>
									</div>
									{/* secondColumnStart */}
									<CardTours />
								</div>
							</div>
							<div className="w-2/5 agency_col_tours  scroll-div">
								<div className="mb-3 card">
									<div className="flex items-center  border-none py-2  px-6 bg-white">
										<div className="flex items-center whitespace-no-wrap text-21">
											Top Active users{" "}
										</div>
										<div className="flex justify-center items-center ml-auto whitespace-no-wrap">
											<div className="flex justify-center items-center">
												<span
													className="hint--left text-center  hint--medium"
													aria-label="this is a hint"
												>
													<button>
														<Info fill="#b3b8bd" className="w-4 h-4" />
													</button>
												</span>
												{/* here the dropdown div... */}
											</div>
										</div>
									</div>
									<div className="p-5 pt-2 pb-2 bg-white">
										{data_active_users.map(user => (
											<div className="py-2">
												<div
													style={{
														backgroundColor: "#f3f3f3"
													}}
													className=" flex flex-row flex-row justify-between items-center p-3"
												>
													<div className="flex lD:flex-row mD:flex-col sD:flex-row lD:py-2 mD:py-0 justify-start lD:items-center mD:items-center sD:items-center xsD:items-center">
														<div className="pr-2">
															<img
																className="lD:h-16 lD:w-16 mD:w-12 mD:h-12 sD:w-16 sD:h-16 xsD:w-16 xsD:h-16 rounded-full "
																src={user["picture"]}
																alt="img"
															/>
														</div>
														<div className="flex flex-col justify-start ">
															<h1 className="lD:text-18 mD:text-16 sD:text-18 xsD:text-18">
																{user["name"]}
															</h1>
															<p className="text-gray-600 lD:text-16 mD:text-14 sD:text-16 xsD:text-16">
																{user["type"]} user
															</p>
														</div>
													</div>
													<div className="agency_contact_user flex flex-row justify-start items-center">
														<a href="#">
															<Mail
																className="px-2 w-10 h-10 responsive-icons"
																fill="#707070"
															/>
														</a>
														<a href="#">
															<Dots
																className="px-2 w-10 h-10 responsive-icons"
																fill="#707070"
															/>
														</a>{" "}
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-2/5 px-4 agency_col_users">
						<div className="mb-3 card">
							<div className="flex items-center h-16 border-none py-2  px-6 bg-white">
								<div className="flex items-center whitespace-no-wrap text-21">
									Top Regions
								</div>
								<div className="flex justify-center items-center ml-auto whitespace-no-wrap">
									<div className="flex justify-center items-center">
										<span
											className="hint--left text-center  hint--medium"
											aria-label="this is a hint"
										>
											<button>
												<Info fill="#b3b8bd" className="w-4 h-4" />
											</button>
										</span>
										{/* here the dropdown div... */}
									</div>
								</div>
							</div>
							<div className="bg-white">
								<div className="flex justify-center p-4 text-center w-full items-center">
									<MapChart />
								</div>
							</div>
							<div className="bg-white flex  flex-col text-center scroll-div">
								{data_regions.map(region => {
									return (
										<div className="flex flex-row py-4  justify-between">
											<div className="w-2/5">
												<p className="text-lg font-bold-500 whitespace-no-wrap">
													{region["place"]}
												</p>
											</div>
											<div className="w-2/5">
												<div className="p-2 border h-4 relative bg-gray-400 rounded-full">
													<span
														className="agency_span"
														style={{ width: `${0}%` }}
													></span>
												</div>
											</div>
											<div className="w-1/5 ">{region["progress"]}%</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};
export default UserInteraction;

const Container = styled.div`
	.agency_span {
		display: block;
		height: 100%;
		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		background-color: #179ef7;
		position: absolute;
		top: 0;
		left: 0;
		overflow: hidden;
		transition: 4s width;
	}
	.set-background-color-v2 {
		background-color: #ffffff;
		opacity: 0.55;
	}
	.set-top-tour h1 {
		margin: 5px 0;
		font-size: 14px !important;
		font-weight: 600;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.17;
		letter-spacing: normal;
		text-align: left;
		color: #2d2d2d;
	}
	.set-top-tour p {
		font-size: 11px !important;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.18;
		letter-spacing: normal;
		text-align: left;
		color: #2d2d2d;
	}

	@media (max-width: 1600px) {
		.agency_contact_user {
			flex-direction: column !important;
		}
	}
	@media (max-width: 1365px) {
		.agency_row_users {
			flex-direction: column-reverse !important;
		}
		.agency_col_users {
			width: 100% !important;
		}
		.agency_col_tours {
			width: 50% !important;
		}
	}
`;
