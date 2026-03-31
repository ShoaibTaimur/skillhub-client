import { Button } from "./ui/button";
import { Eye, Heart } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import type React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import Swal from "sweetalert2";
const items = [
  { label: "Design", value: "design" },
  { label: "Programming", value: "programming" },
  { label: "Marketing", value: "marketing" },
  { label: "Teaching", value: "teaching" },
  { label: "Video Editing", value: "video editing" },
];

type Skill = {
  _id: string;
  title: string;
  category: string;
  price: string;
  description: string;
  name: string;
};

type SkillTabProps = {
  skill: Skill;
  handleDelete: (id: string) => void;
};

const SkillTab = ({ skill, handleDelete }: SkillTabProps) => {
  const [category, setCategory] = useState<string | null>(null);
  const title = skill.title;
  const name = skill.name;
  const categoryInitil = skill.category;
  const price = skill.price;
  const id = skill._id;
  const description = skill.description;

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const newSkillInfo = Object.fromEntries(formData.entries());
    const newSkill = {
      name,
      ...newSkillInfo,
    };
    fetch(`https://skillhub-server-bice.vercel.app/skills/${id}`, {
      method: "PUT",
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
    <div className="bg-white p-4 rounded-3xl shadow flex flex-col gap-5">
      <div className="mt-3 h-[70%]">
        <div className="bg-[#ede0fd98] py-0.75 px-3 rounded-2xl w-fit flex items-center mb-2">
          <p className="gradient-text font-bold text-[12px]">
            {categoryInitil}
          </p>
        </div>
        <h1 className="inter font-medium text-[16px] mb-1">{title}</h1>
        <p className="opacity-80">
          By- <span className="gradient-text font-extrabold">{name}</span>
        </p>
      </div>
      <div className="flex justify-between items-center h-[15%]">
        <p className="gradient-text inter font-bold">${price}</p>
        <div className="flex gap-2">
          <div className="flex opacity-60 gap-1">
            <Heart />
            <p>123</p>
          </div>
          <div className="flex opacity-60 gap-1">
            <Eye />
            <p>189</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <Popover>
          <PopoverTrigger
            render={
              <Button className="w-[50%] h-10" variant="login">
                Edit details
              </Button>
            }
          />
          <PopoverContent align="end" className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="leading-none font-medium">Edit</h4>
                <p className="text-sm text-muted-foreground">Edit properly</p>
              </div>
              <form onSubmit={(e) => handleSubmit(e)} className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="title">Tile</Label>
                  <Input
                    name="title"
                    id="width"
                    defaultValue={title}
                    className="col-span-2 h-8"
                    required
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    name="category"
                    items={items}
                    value={category}
                    onValueChange={setCategory}
                    required
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
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Price</Label>
                  <Input
                    name="price"
                    id="width"
                    defaultValue={price}
                    className="col-span-2 h-8"
                    required
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Description</Label>
                  <Input
                    name="description"
                    id="width"
                    defaultValue={description}
                    className="col-span-2 h-8"
                    required
                  />
                </div>
                <Button type="submit" variant="outline" className="h-10">
                  Submit
                </Button>
              </form>
            </div>
          </PopoverContent>
        </Popover>
        <Button
          onClick={() => handleDelete(id)}
          variant="destructive"
          className="w-[50%] h-10"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default SkillTab;
