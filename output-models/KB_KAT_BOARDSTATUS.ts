import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_KAT_BOARDSTATUSAttributes {
    DTINSERT?: Date;
    L_FILEINFORMATION?: number;
    LUSERIDINSERT?: number;
    STR_BOARDSTATUS?: string;
    STRID: string;
    STR_ID?: string;
    STR_SORTIERUNG?: string;
    DTEDIT?: Date;
    LUSERID?: number;
}

@Table({
	tableName: "KB_KAT_BOARDSTATUS",
	timestamps: false 
})
export class KB_KAT_BOARDSTATUS extends Model<KB_KAT_BOARDSTATUSAttributes, KB_KAT_BOARDSTATUSAttributes> implements KB_KAT_BOARDSTATUSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BOARDSTATUS?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SORTIERUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

}