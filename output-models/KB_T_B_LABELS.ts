import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_B_LABELSAttributes {
    FKSTRID?: string;
    STR_HINTERGRUNDFARBE?: string;
    STR_LABEL?: string;
    STRID: string;
    LUSERIDINSERT?: number;
    LUSERID?: number;
    DTINSERT?: Date;
    DTEDIT?: Date;
    STR_SCHRIFTFARBE?: string;
}

@Table({
	tableName: "KB_T_B_LABELS",
	timestamps: false 
})
export class KB_T_B_LABELS extends Model<KB_T_B_LABELSAttributes, KB_T_B_LABELSAttributes> implements KB_T_B_LABELSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_HINTERGRUNDFARBE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_LABEL?: string;

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
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SCHRIFTFARBE?: string;

}