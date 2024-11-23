import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './card';

const ModelCard = ({ title, description, uses }) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        {uses && (
          <>
            <p className="font-medium">Most effective when used for:</p>
            <ul className="list-disc pl-5 mt-2">
              {uses.map((use, index) => (
                <li key={index}>{use}</li>
              ))}
            </ul>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ModelCard;