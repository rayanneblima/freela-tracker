import IProject from '@/interfaces/IProject';
export default interface ITask {
  duration: number,
  description: string,
  color: string,
  conclusionDate: string,
  project: IProject
}