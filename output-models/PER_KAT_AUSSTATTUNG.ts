import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PER_KAT_AUSSTATTUNGAttributes {
    B_STANDARDAUSSTATTUNG?: boolean;
    DTINSERT?: Date;
    STRID: string;
    LUSERID?: number;
    TXT_BESCHREIBUNG?: string;
    LUSERIDINSERT?: number;
    REF_AUSSTATUNG_KAT?: string;
    DTEDIT?: Date;
    STR_AUSSTATTUNG?: string;
}

@Table({
	tableName: "PER_KAT_AUSSTATTUNG",
	timestamps: false 
})
export class PER_KAT_AUSSTATTUNG extends Model<PER_KAT_AUSSTATTUNGAttributes, PER_KAT_AUSSTATTUNGAttributes> implements PER_KAT_AUSSTATTUNGAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_STANDARDAUSSTATTUNG?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BESCHREIBUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_AUSSTATUNG_KAT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_AUSSTATTUNG?: string;

}