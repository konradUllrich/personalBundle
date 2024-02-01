import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCCATEGORYTITLEAttributes {
    STRCATEGORYGUID: string;
    STRLANG: string;
    STRITEM?: string;
}

@Table({
	tableName: "LCCATEGORYTITLE",
	timestamps: false 
})
export class LCCATEGORYTITLE extends Model<LCCATEGORYTITLEAttributes, LCCATEGORYTITLEAttributes> implements LCCATEGORYTITLEAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRCATEGORYGUID!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(16) 
    })
    	STRLANG!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRITEM?: string;

}