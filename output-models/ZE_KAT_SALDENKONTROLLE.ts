import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ZE_KAT_SALDENKONTROLLEAttributes {
    DTEDIT?: Date;
    FLT_OBERGRENZE?: number;
    STRID: string;
    L_FILEINFORMATION?: number;
    DTINSERT?: Date;
    LUSERID?: number;
    STR_STATUS?: string;
    LUSERIDINSERT?: number;
    FLT_UNTERGRENZE?: number;
    TXT_HINWEISTEXT?: string;
    B_KAPPUNGSGRENZE?: boolean;
    STR_ALTERNATIVTEXTFUERBARRIERE?: string;
}

@Table({
	tableName: "ZE_KAT_SALDENKONTROLLE",
	timestamps: false 
})
export class ZE_KAT_SALDENKONTROLLE extends Model<ZE_KAT_SALDENKONTROLLEAttributes, ZE_KAT_SALDENKONTROLLEAttributes> implements ZE_KAT_SALDENKONTROLLEAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_OBERGRENZE?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STATUS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_UNTERGRENZE?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_HINWEISTEXT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_KAPPUNGSGRENZE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ALTERNATIVTEXTFUERBARRIERE?: string;

}