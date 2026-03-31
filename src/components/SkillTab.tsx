import { Button } from "./ui/button";
import { Eye, Heart } from "lucide-react";
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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import Swal from "sweetalert2";
import { Field, FieldGroup } from "./ui/field";
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
    const updatedSkillInfo = Object.fromEntries(formData.entries());
    const updatedSkill = {
      name,
      ...updatedSkillInfo,
    };
    fetch(`https://skillhub-server-bice.vercel.app/skills/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedSkill),
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
        <Dialog>
          <DialogTrigger
            render={
              <Button
                className="w-38 sm:w-27 md:w-33 lg:w-30 xl:w-40 mr-5 h-10"
                variant="login"
              >
                Edit
              </Button>
            }
          />
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Edit Skill</DialogTitle>
            </DialogHeader>
            <FieldGroup>
              <form onSubmit={(e) => handleSubmit(e)}>
                <Field>
                  <Label htmlFor="title">Tile</Label>
                  <Input
                    name="title"
                    id="title"
                    defaultValue={title}
                    className="col-span-2 h-8"
                    required
                  />
                </Field>
                <Field>
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
                </Field>
                <Field>
                  <Label htmlFor="width">Price</Label>
                  <Input
                    name="price"
                    id="price"
                    defaultValue={price}
                    className="col-span-2 h-8"
                    required
                  />
                </Field>
                <Field>
                  <Label htmlFor="width">Description</Label>
                  <Input
                    name="description"
                    id="description"
                    defaultValue={description}
                    className="col-span-2 h-8"
                    required
                  />
                </Field>
                <div className="mt-6 space-x-5">
                  <DialogClose
                    render={<Button variant="destructive">Cancel</Button>}
                  />
                  <Button variant="login" type="submit">
                    Save changes
                  </Button>
                </div>
              </form>
            </FieldGroup>
          </DialogContent>
        </Dialog>
        <Button
          onClick={() => handleDelete(id)}
          variant="destructive"
          className="w-38 sm:w-27 md:w-33 lg:w-30 xl:w-40 h-10"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default SkillTab;
