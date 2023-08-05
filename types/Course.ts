export default interface Course {
  id: string;
  name: string;
  tasks: {
    name: string;
    description: string;
    done: boolean;
  }[];
}
