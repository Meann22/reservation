import { useState, useEffect } from "react";
import useStore from "../stores/useStore";
import AnimatedDiv from "../components/AnimatedDiv";
import HallImage from "../assets/hall.png";
import Divider0Image from "../assets/divider_0.png";
import Divider1Image from "../assets/divider_1.png";
import BedroomImage from "../assets/bedroom.png";
import BookingModal from "../components/BookingModal";
import SuiteCard from "../components/SuiteCard";
import Testimonial from "../components/Testimonial";
import FBIcon from "../assets/fb_icon.svg";
import IGIcon from "../assets/ig_icon.svg";
import XIcon from "../assets/x_icon.svg";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css"; 

const Home = () => {
	const { suites, fetchSuites } = useStore();
	const [selectedSuite, setSelectedSuite] = useState(null);
	const [showBookingModal, setShowBookingModal] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		fetchSuites();
	}, []);

	const handleBook = (suite) => {
		setSelectedSuite(suite);
		setShowBookingModal(true);
	};

	return (
		<div className="bg-b overflow-hidden">
			<AnimatedDiv className="relative flex items-center justify-center">
				<div className="flex flex-col text-center z-10">
					<div className="relative h-screen w-screen flex flex-col items-center justify-center">
						<img className="absolute h-full w-full object-cover" src={BedroomImage} />
						<div className="absolute h-full w-full bg-g/60"></div>
						<h1 className="text-6xl md:text-8xl tracking-widest font-bold text-c z-10 font-athena">
							SIGNATURÉ
						</h1>
						<p className="text-2xl text-a z-10 font-young-med mb-60">Hotel & Resort</p>

						<button
							onClick={() => navigate("/suites")}
							className="font-young-med text-g bg-amber-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-amber-500 transform hover:scale-105 transition-all shadow-lg"
						>
							BOOK NOW
						</button>
					</div>

					<div className="flex w-full min-h-screen items-center justify-center px-4 py-8">
					<div className="relative w-full md:w-10/12 lg:w-8/12">
						<img
						className="absolute w-full h-full object-cover z-0"
						src={HallImage}
						alt="Hall"
						/>
						<div className="relative z-10 flex flex-col md:items-end gap-6">
						<p className="text-g font-young-med bg-b rounded-bl-2xl px-4 py-2 text-2xl sm:text-4xl md:text-6xl lg:text-8xl w-full md:w-2/4 text-justify">
							ELEGANCE, SERENE, & GRANDEUR
						</p>
						<div className="flex justify-end items-end w-full">
							<div className="flex flex-col bg-b px-4 py-6 w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
							<p className="text-f text-justify font-young text-base sm:text-lg md:text-xl mb-4">
								Experience luxury with Signature. Stay within the four walls of status and
								statement, the same magnificence that put Signature into the Forbes Travel
								Guide 2025.
							</p>
							<button
								onClick={() => navigate("/suites")}
								className="font-young text-amber-900 py-3 sm:py-4 cursor-pointer hover:bg-amber-900 hover:text-amber-100 border-2 border-amber-900 rounded-xl text-sm sm:text-base"
							>
								BOOK NOW
							</button>
							</div>
						</div>
						</div>
					</div>
					</div>


					<div className="relative w-full">
					<img
						className="z-0 w-full object-cover min-h-[120px] sm:min-h-[400px] md:min-h-[100px]"
						src={Divider0Image}
						alt="Luxury Suites"
					/>
					<div className="absolute inset-0 bg-g/60 flex flex-col justify-center items-center text-center px-4 py-6">
						<p className="font-young-med text-2xl sm:text-4xl md:text-6xl text-a mb-4 leading-tight">
						LUXURY SUITES
						</p>
						<p className="font-young text-b text-sm sm:text-base md:text-xl max-w-xl leading-snug">
						Indulge in the epitome of luxury with our meticulously designed suites,
						each offering a unique experience of sophistication and comfort.
						</p>
					</div>
					</div>



					<div className="min-h-screen flex justify-center py-26">
						<div className="flex flex-col gap-20 w-10/12">
							{suites.map((suite) => (
								<SuiteCard key={suite.id} suite={suite} onBook={handleBook} />
							))}
						</div>
					</div>

					<div className="relative">
						<img className="z-0 w-full object-cover min-h-[120px] sm:min-h-[400px] md:min-h-[100px]" src={Divider1Image} />
						<div className="absolute inset-0 bg-g/60 flex flex-col justify-center items-center text-center px-4 py-6">
							<p className="font-young-med text-2xl sm:text-4xl md:text-6xl text-a mb-4 leading-tight">WHAT OUR GUESTS SAY</p>
							<p className="font-young text-b text-sm sm:text-base md:text-xl max-w-xl leading-snug">
								Discover why discerning travelers choose us for extraordinary moments,
								<br />
								as each stay is crafted to surpass expectations and create lasting memories.
							</p>
						</div>
					</div>

					<div className="min-h-screen flex justify-center py-26 bg-c">
						<div className="flex flex-col gap-24 w-8/12">
							<Testimonial />
						</div>
					</div>

					<div className="relative">
						<div className="bg-f py-20 justify-center items-center flex flex-col">
							<p className="font-young-med text-6xl text-a mb-4">GET EXCLUSIVE DEALS</p>
							<p className="font-young text-b">
								Join our exclusive membership to receive personalized offers, priority reservations,
								and complimentary upgrades.
							</p>
						</div>
					</div>

					<div className="flex flex-col">
						<div className="bg-g pt-20 pb-10 justify-center items-center flex flex-col gap-20">
							<div>
								<p className="font-young-med text-6xl text-a mb-4">SIGNATURÉ</p>
								<p className="font-young text-a">
									Creating luxurious experiences and unforgettable moments for our distinguished
									guests.
								</p>
							</div>
							<div className="flex gap-12 mb-24">
								<img className="w-7" src={FBIcon} />
								<img className="w-6" src={XIcon} />
								<img className="w-6" src={IGIcon} />
							</div>
							<div className="flex font-young text-a w-8/12 justify-between">
								<div className="flex flex-col items-start">
									<p>Suites & Villas</p>
									<p>Dining Experience</p>
									<p>Spa & Wellness</p>
									<p>Experiences</p>
									<p>Events</p>
								</div>
								<div className="flex flex-col items-end">
									<p>Privacy Policy</p>
									<p>Terms & Conditions</p>
									<p>Cancellation Policy</p>
									<p>Guest Policies</p>
								</div>
							</div>
							<div className="text-a font-young pt-8 text-center text-sm font-light">
								<p>
									&copy; {new Date().getFullYear()} Signature Hotel & Resort. All rights reserved.
								</p>
							</div>
						</div>
					</div>
				</div>
			</AnimatedDiv>

			{/* Modal */}
			{showBookingModal && selectedSuite && (
				<BookingModal
					suite={selectedSuite}
					onClose={() => setShowBookingModal(false)}
					onConfirm={() => fetchSuites()}
				/>
			)}
		</div>
	);
};

export default Home;
