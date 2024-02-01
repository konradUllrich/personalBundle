import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PER_KAT_BUEROLEITUNGAttributes {
    TXT_BENUTZER?: string;
    REF_ORGA?: string;
    LUSERID?: number;
    DTINSERT?: Date;
    STR_BUEROLEITUNG?: string;
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
    TXT_ABTEILUNGEN?: string;
    STRID: string;
}

@Table({
	tableName: "PER_KAT_BUEROLEITUNG",
	timestamps: false 
})
export class PER_KAT_BUEROLEITUNG extends Model<PER_KAT_BUEROLEITUNGAttributes, PER_KAT_BUEROLEITUNGAttributes> implements PER_KAT_BUEROLEITUNGAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BENUTZER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_ORGA?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BUEROLEITUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_ABTEILUNGEN?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

}