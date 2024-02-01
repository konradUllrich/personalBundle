import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPFUPDGAttributes {
    STRAPPDGGUID: string;
    STRAPPFUPGUID: string;
    BISMAIN: number;
    LRELLEVCNT: number;
}

@Table({
	tableName: "LCAPPFUPDG",
	timestamps: false 
})
export class LCAPPFUPDG extends Model<LCAPPFUPDGAttributes, LCAPPFUPDGAttributes> implements LCAPPFUPDGAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRAPPDGGUID!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRAPPFUPGUID!: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	BISMAIN!: number;

    @Column({
    	type: DataType.INTEGER 
    })
    	LRELLEVCNT!: number;

}