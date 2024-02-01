import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPFUPTITLEAttributes {
    STRFUPGUID: string;
    STRLANG: string;
    STRITEM?: string;
}

@Table({
	tableName: "LCAPPFUPTITLE",
	timestamps: false 
})
export class LCAPPFUPTITLE extends Model<LCAPPFUPTITLEAttributes, LCAPPFUPTITLEAttributes> implements LCAPPFUPTITLEAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRFUPGUID!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(16) 
    })
    	STRLANG!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2048) 
    })
    	STRITEM?: string;

}