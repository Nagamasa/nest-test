import { IsNotEmpty, IsString } from "class-validator";

export class CreateTaskDto {
    @IsNotEmpty() // 必須を表すバリデーション
    @IsString() // string型を表すバリデーション
    name: string;
}