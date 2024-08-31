import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { Twitter } from 'lucide-react';
  import { Linkedin } from 'lucide-react';


  
  const TeamMemberCard = ({ member }) => {
    return (
      <Card className="max-w-sm bg-gray-800 text-white border border-transparent shadow-lg rounded-lg p-4">
        <div className="flex flex-col items-center">
          <div className="rounded-full p-[5px] bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500">
            <img
              src={member.photo}
              alt={`${member.name}'s photo`}
              className="rounded-full w-40 h-40 bg-gray-800"
            />
          </div>
          <CardContent className="text-center p-6">
            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
            <p className="text-gray-300">{member.description}</p>
          </CardContent>
          <CardFooter className="flex justify-center space-x-4 mb-6">
            <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <Twitter  />
            </a>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <Linkedin />
            </a>
          </CardFooter>
        </div>
      </Card>
    );
  };

export default TeamMemberCard;
