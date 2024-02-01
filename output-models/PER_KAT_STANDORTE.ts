import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PER_KAT_STANDORTEAttributes {
    STR_STRASSE?: string;
    LUSERIDINSERT?: number;
    STR_ORT?: string;
    STR_PLZ?: string;
    DTEDIT?: Date;
    STR_STANDORT?: string;
    STRID: string;
    LUSERID?: number;
    DTINSERT?: Date;
}

@Table({
	tableName: "PER_KAT_STANDORTE",
	timestamps: false 
})
export class PER_KAT_STANDORTE extends Model<PER_KAT_STANDORTEAttributes, PER_KAT_STANDORTEAttributes> implements PER_KAT_STANDORTEAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STRASSE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ORT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PLZ?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STANDORT?: string;

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
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

}