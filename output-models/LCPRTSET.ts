import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCPRTSETAttributes {
    GUIDPORTLET: string;
    GUIDPORTAL: string;
    GUIDUSER: string;
    INTMANDATORY: number;
}

@Table({
	tableName: "LCPRTSET",
	timestamps: false 
})
export class LCPRTSET extends Model<LCPRTSETAttributes, LCPRTSETAttributes> implements LCPRTSETAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	GUIDPORTLET!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	GUIDPORTAL!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	GUIDUSER!: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	INTMANDATORY!: number;

}