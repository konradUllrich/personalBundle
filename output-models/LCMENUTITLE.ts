import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCMENUTITLEAttributes {
    STRMENUGUID: string;
    STRLANG: string;
    STRITEM: string;
}

@Table({
	tableName: "LCMENUTITLE",
	timestamps: false 
})
export class LCMENUTITLE extends Model<LCMENUTITLEAttributes, LCMENUTITLEAttributes> implements LCMENUTITLEAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRMENUGUID!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(16) 
    })
    	STRLANG!: string;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STRITEM!: string;

}