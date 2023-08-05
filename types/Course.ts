export default interface Course {
  id: string;
  name: string;
  description: string;
  tasks: {
    name: string;
    description: string;
    done: boolean;
  }[];
}
