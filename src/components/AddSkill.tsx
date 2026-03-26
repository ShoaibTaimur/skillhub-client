import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import type React from "react";
import { CornerUpLeft } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const items = [
  { label: "Design", value: "design" },
  { label: "Programming", value: "programming" },
  { label: "Marketing", value: "marketing" },
  { label: "Teaching", value: "teaching" },
  { label: "Video Editing", value: "video editing" },
];

const AddSkill = () => {
  const navigate=useNavigate();
  const [category, setCategory] = useState<string | null>(null);
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const newSkill = Object.fromEntries(formData.entries());
    fetch("http://localhost:5050/skills", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSkill),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Saved!",
            text: "Skill saved successfully!",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <Card className="w-full max-w-3xl p-5">
        <CardHeader className="pb-5">
          <Button
            variant="link"
            type="submit"
            className="h-10 w-fit border-none mb-2 cursor-pointer flex justify-start px-0"
          >
            <CornerUpLeft /> Back to Dashboard
          </Button>
          <CardTitle className="text-2xl">Add New Skill</CardTitle>
          <CardDescription className="text-md">
            Share your expertise with the community
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="e.g., Advanced React Development"
                  name="title"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  name="category"
                  items={items}
                  value={category}
                  onValueChange={setCategory}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Category</SelectLabel>
                      {items.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="price">Price($)</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="49"
                  name="price"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  name="description"
                  placeholder="Type your message here."
                />
              </div>
              <Button variant="login" type="submit" className="w-full h-10">
                Publish Skill
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddSkill;
