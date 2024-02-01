import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_B_PRIORITAETAttributes {
    STRID: string;
    STR_SORTIERUNG?: string;
    DTEDIT?: Date;
    LUSERID?: number;
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    FKSTRID?: string;
    STR_PRIORITAET?: string;
    L_FILEINFORMATION?: number;
}

@Table({
	tableName: "KB_T_B_PRIORITAET",
	timestamps: false 
})
export class KB_T_B_PRIORITAET extends Model<KB_T_B_PRIORITAETAttributes, KB_T_B_PRIORITAETAttributes> implements KB_T_B_PRIORITAETAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

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
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PRIORITAET?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

}