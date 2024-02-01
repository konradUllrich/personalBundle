import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface INV_KAT_BEREICHAttributes {
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    LUSERID?: number;
    DTEDIT?: Date;
    STR_BEREICH?: string;
    STRID: string;
}

@Table({
	tableName: "INV_KAT_BEREICH",
	timestamps: false 
})
export class INV_KAT_BEREICH extends Model<INV_KAT_BEREICHAttributes, INV_KAT_BEREICHAttributes> implements INV_KAT_BEREICHAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

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
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BEREICH?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

}