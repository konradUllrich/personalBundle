import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_B_K_NACHRICHTENAttributes {
    LUSERIDINSERT?: number;
    STR_EINAUSGANG?: string;
    FKSTRID?: string;
    DTEDIT?: Date;
    STR_VON?: string;
    TXT_TEXT?: string;
    L_FILEINFORMATION?: number;
    STRID: string;
    STR_BETREFF?: string;
    DTINSERT?: Date;
    STR_AN?: string;
    LUSERID?: number;
    STR_EMAILVORLAGE?: string;
}

@Table({
	tableName: "KB_T_B_K_NACHRICHTEN",
	timestamps: false 
})
export class KB_T_B_K_NACHRICHTEN extends Model<KB_T_B_K_NACHRICHTENAttributes, KB_T_B_K_NACHRICHTENAttributes> implements KB_T_B_K_NACHRICHTENAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_EINAUSGANG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_VON?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_TEXT?: string;

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
    	type: DataType.STRING(255) 
    })
    	STR_BETREFF?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_AN?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_EMAILVORLAGE?: string;

}