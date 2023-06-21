// import React, { useState } from "react";
// import { motion, LayoutGroup } from "framer-motion";

// import "./styles.css";
// import { Slide } from "react-awesome-reveal";

// function Content({ day, disabled }) {
//   return (
//     <motion.h1
//       className="title"
//       layoutId="title"
//       style={{ opacity: disabled ? 0.2 : 1 }}
//     >
//       {day}
//     </motion.h1>
//   );
// }

// function ExpandedCard({ children, onCollapse }) {
//   return (
//     <>
//       <motion.div
//         className="card expanded"
//         layoutId="expandable-card"
//         onClick={onCollapse}
//       >
//         {children}
//       </motion.div>
//       <motion.p
//         className="card expanded secondary"
//         onClick={onCollapse}
//         transition={{ delay: 0.3 }}
//         initial={{ opacity: 0, top: "6rem" }}
//         animate={{ opacity: 1, top: "3rem" }}
//       >
//         Today is clear
//       </motion.p>
//     </>
//   );
// }

// function CompactCard({ children, onExpand, disabled }) {
//   return (
//     <motion.div
//       className="card compact"
//       layoutId="expandable-card"
//       onClick={disabled ? undefined : onExpand}
//     >
//       {children}
//     </motion.div>
//   );
// }

// function DateButton({ day, onCollapse, onExpand, disabled }) {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const collapseDate = () => {
//     setIsExpanded(false);
//     onCollapse();
//   };

//   const expandDate = () => {
//     setIsExpanded(true);
//     onExpand();
//   };

//   return (
//     <div className="card-container">
//       <LayoutGroup>
//         {isExpanded ? (
//           <ExpandedCard onCollapse={collapseDate} day={day}>
//             <Content day={day} disabled={disabled} />
//           </ExpandedCard>
//         ) : (
//           <CompactCard onExpand={expandDate} disabled={disabled} day={day}>
//             <Content day={day} disabled={disabled} />
//           </CompactCard>
//         )}
//       </LayoutGroup>
//     </div>
//   );
// }

// export default function WhyChooseUs() {
//   const [expandedDay, setCollapsedDay] = useState();
//   const days = [25, 26, 27, 28, 29];

//   return (
//     <div className="h-96">
//       <Slide className="text-4xl p-4 my-text-g text-center">
//         Why Choose Us?
//       </Slide>
//       <div className="grid grid-cols-5">
//         {days.map((day) => (
//           <DateButton
//             key={day}
//             day={day}
//             disabled={expandedDay !== day && expandedDay !== undefined}
//             onExpand={() => setCollapsedDay(day)}
//             onCollapse={() => setCollapsedDay()}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
