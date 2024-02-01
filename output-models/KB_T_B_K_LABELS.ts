import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_B_K_LABELSAttributes {
    LID: number;
    LUSERIDINSERT?: number;
    FKSTRID?: string;
    DTINSERT?: Date;
    REF_LABEL?: string;
    LUSERID?: number;
    DTEDIT?: Date;
}

@Table({
	tableName: "KB_T_B_K_LABELS",
	timestamps: false 
})
export class KB_T_B_K_LABELS extends Model<KB_T_B_K_LABELSAttributes, KB_T_B_K_LABELSAttributes> implements KB_T_B_K_LABELSAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_LABEL?: string;

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

}