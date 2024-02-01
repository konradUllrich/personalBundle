import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface VAL_KAT_STANDORTEAttributes {
    LUSERIDINSERT?: number;
    STRID: string;
    DTEDIT?: Date;
    DTINSERT?: Date;
    LUSERID?: number;
    STR_STANDORT?: string;
}

@Table({
	tableName: "VAL_KAT_STANDORTE",
	timestamps: false 
})
export class VAL_KAT_STANDORTE extends Model<VAL_KAT_STANDORTEAttributes, VAL_KAT_STANDORTEAttributes> implements VAL_KAT_STANDORTEAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

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
    	STR_STANDORT?: string;

}