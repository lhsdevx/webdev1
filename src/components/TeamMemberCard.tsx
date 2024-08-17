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
        <p className="text-gray-600">{member.description}</p>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
