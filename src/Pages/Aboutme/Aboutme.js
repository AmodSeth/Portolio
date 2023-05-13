// import React from 'react';
// import Style from './Aboutme.scss';
// import Terminal from "./Terminal";
// import {Box} from "@mui/material";
// import {info} from "../../info/Info";

// export default function About() {
//     const firstName = info.firstName.toLowerCase()

//     function aboutMeText() {
//         return <>
//             <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
//                 about{firstName} </p>
//             <p><span style={{color: info.baseColor}}>about{firstName} <span
//                 className={Style.green}>(main)</span> $ </span>
//                 {info.bio}
//             </p>
//         </>;
//     }

//     function skillsText() {
//         return <>
//             <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
//             </p>
//             <p><span style={{color: info.baseColor}}>skills/tools <span
//                 className={Style.green}>(main)</span> $</span> ls</p>
//             <p style={{color: info.baseColor}}> Proficient With</p>
//             <ul className={Style.skills}>
//                 {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
//             </ul>
//             <p style={{color: info.baseColor}}> Exposed To</p>
//             <ul className={Style.skills}>
//                 {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
//             </ul>
//         </>;
//     }

//     function miscText() {
//         return <>
//             <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
//                 hobbies/interests</p>
//             <p><span style={{color: info.baseColor}}>hobbies/interests <span
//                 className={Style.green}>(main)</span> $</span> ls</p>
//             <ul>
//                 {info.hobbies.map((hobby, index) => (
//                     <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
//                 ))}
//             </ul>
//         </>;
//     }

//     return (
//         <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
//             <Terminal text={aboutMeText()}/>
//             <Terminal text={skillsText()}/>
//             <Terminal text={miscText()}/>
//         </Box>
//     )
// }

import React from "react";
import { Box } from "@mui/material";
import Terminal from "../Aboutme/Terminal";
import "./Aboutme.scss";

const colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

const DataText1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit, 
  Quos aut ipsam excepturi dolorem id, harum 
  voluptates tenetur neque dolores nisi facere consequatur 
  eveniet, earum eos dolore odit aliquam sit maiores!`;

const Name = `Greyw0lf22 $`;
const fullStackSkills = [
  "JavaScript",
  "react/react-native",
  "Node.js",
  "Mongo/Mongoose",
  "Express",
  "git/github",
];
const otherSkills = ["C/C++", "Python", "Bash"];
const interests = [
  {
    text:'Gaming',
    emoji: '🎮',
  },
  {
    text:'Reading',
    emoji:'📖',
  },
  {
    text:'Photography',
    emoji:'📸' ,
  }
]
function FirstText() {
  return (
    <>
      <p>
        <span style={{ color: colors[0] }}>{Name}</span> cat Define_Me.pdf
      </p>
      <p>
        <span style={{ color: colors[0] }}>
          Define_Me<span className="green">(main)</span> ${" "}
        </span>
        {DataText1}
      </p>
    </>
  );
}
function SecondText() {
  return (
    <>
      <p>
        <span style={{ color: colors[0] }}>{Name}</span> cd skills/tools
      </p>
      <p>
        <span style={{ color: colors[0] }}>
          skills/tools <span className="green">(main)</span> $
        </span>{" "}
        ls
      </p>
      <p style={{ color: colors[0] }}>Practised With</p>
      <ul className="skills">
        {fullStackSkills.map((items) => (
          <li>{items}</li>
        ))}
      </ul>
      <p style={{ color: colors[0] }}>Proficient with</p>
      <ul className="skills">
        {otherSkills.map((items) => (
          <li>{items}</li>
        ))}
      </ul>
    </>
  );
}
function ThirdText() {
  return (
    <>
      <p>
        <span style={{ color: colors[0] }}>{Name}</span> cd hobbies/interests
      </p>
      <p>
        <span style={{ color: colors[0] }}>
          hobbies/interests <span className="green">(main)</span> $
        </span>{" "}
        ls
      </p>
      <ul>
        {
          interests.map((items,index)=>(
            <li key={index}>
              <Box component={"span"} mr={"1rem"}>
                {items.emoji}
              </Box>
              {
                items.text
              }
            </li>
          ))

        }
      </ul>
    </>
  );
}

function Aboutme() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <Terminal text={FirstText()} />
      <Terminal text={SecondText()} />
      <Terminal text={ThirdText()} />
    </Box>
  );
}

export default Aboutme;
