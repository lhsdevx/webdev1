import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
const TeamMemberCard = ({ member }) => {
  return (
    <Card className="max-w-sm shadow-lg">
      <img src={member.photo} alt={`${member.name}'s photo`} className="rounded-t-lg" />
      <CardContent>
        <h3 className="text-xl font-bold">{member.name}</h3>
        <h2 className="py-2 text-gray-800">{member.position}</h2>
        <p className="pb-2 text-gray-500">{member.description}</p>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
