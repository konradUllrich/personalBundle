import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ABW_KAT_PLANUNGSPROZESSAttributes {
    DTEDIT?: Date;
    LUSERIDINSERT?: number;
    STR_ID?: string;
    LUSERID?: number;
    L_FILEINFORMATION?: number;
    STRID: string;
    DTINSERT?: Date;
    STR_SORTIERUNG?: string;
    STR_PLANUNGSPROZESS?: string;
}

@Table({
	tableName: "ABW_KAT_PLANUNGSPROZESS",
	timestamps: false 
})
export class ABW_KAT_PLANUNGSPROZESS extends Model<ABW_KAT_PLANUNGSPROZESSAttributes, ABW_KAT_PLANUNGSPROZESSAttributes> implements ABW_KAT_PLANUNGSPROZESSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SORTIERUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PLANUNGSPROZESS?: string;

}