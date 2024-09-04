import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import Image from "next/image";

const TeamMemberCard = ({ member }: { member: any }) => {
  return (
    <Card className="max-w-sm bg-gray-800 text-white border border-transparent shadow-lg rounded-lg p-5">
      <div className="flex flex-col items-center">
        <div className="rounded-full p-[5px] bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500">
          <Image
            src={member.photo}
            alt={`${member.name}'s photo`}
            width={160}
            height={160}
            objectFit="cover"
            objectPosition="center"
            className="rounded-full w-40 h-40 bg-gray-800"
          />
        </div>
        <CardContent className="text-center p-6">
          <h1 className="text-xl font-bold">{member.name}</h1>
          <h2 className="text-lg font-semibold mb-2 text-cyan-300">
            {member.position}
          </h2>
          <p className="text-gray-300">{member.description}</p>
        </CardContent>
        <CardFooter className="flex justify-center space-x-4 -mb-4">
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Github />
          </a>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Linkedin />
          </a>
        </CardFooter>
      </div>
    </Card>
  );
};

export default TeamMemberCard;
