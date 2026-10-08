import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLawDto {
  @IsString()
  @IsNotEmpty()
  lawId: string;

  @IsString()
  @IsNotEmpty()
  lawName: string;
}
