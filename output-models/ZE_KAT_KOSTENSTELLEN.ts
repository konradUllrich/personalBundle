import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ZE_KAT_KOSTENSTELLENAttributes {
    LUSERID?: number;
    DTEDIT?: Date;
    STRID: string;
    LUSERIDINSERT?: number;
    STR_KOSTENSTELLE?: string;
    DTINSERT?: Date;
}

@Table({
	tableName: "ZE_KAT_KOSTENSTELLEN",
	timestamps: false 
})
export class ZE_KAT_KOSTENSTELLEN extends Model<ZE_KAT_KOSTENSTELLENAttributes, ZE_KAT_KOSTENSTELLENAttributes> implements ZE_KAT_KOSTENSTELLENAttributes {

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
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_KOSTENSTELLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

}